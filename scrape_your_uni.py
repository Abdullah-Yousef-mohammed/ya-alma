import time
import json
import sys
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup

def log(msg):
    print(msg, flush=True)

def init_driver():
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    return webdriver.Chrome(options=options)

def scrape_universities():
    log("Initializing Chrome driver in headless mode...")
    driver = init_driver()
    base_url = "https://your-uni.com"
    universities_data = []

    try:
        log(f"Fetching {base_url}/universities ... (Waiting 10 seconds for Cloudflare)")
        driver.get(f"{base_url}/universities")
        time.sleep(10)  # Increased wait time for Cloudflare
        
        log("Parsing page source...")
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        
        links = []
        for a_tag in soup.find_all('a', href=True):
            href = a_tag['href']
            if '/universities/' in href and href != '/universities' and href not in links:
                links.append(href if href.startswith('http') else base_url + href)
                
        log(f"Found {len(links)} university links. Visiting the first 5 for validation...")
        
        for index, link in enumerate(links[:5]):
            log(f"[{index+1}/5] Scraping {link}...")
            driver.get(link)
            time.sleep(5) # Wait for page load
            page_soup = BeautifulSoup(driver.page_source, 'html.parser')
            
            title_tag = page_soup.find('h1')
            name = title_tag.text.strip() if title_tag else "Unknown University"
            
            paragraphs = page_soup.find_all('p')
            about = paragraphs[0].text.strip() if paragraphs else "Description not available."
            
            uni_obj = {
                "name": name,
                "aboutEn": about,
                "url": link,
                "faculties": []
            }
            universities_data.append(uni_obj)
            log(f"   -> Extracted data for: {name}")
            
        with open("scraped_data.json", "w", encoding="utf-8") as f:
            json.dump(universities_data, f, indent=4)
        log("Target complete! Data successfully outputted to scraped_data.json.")

    except Exception as e:
        log(f"Error occurred: {e}")
    finally:
        driver.quit()
        log("Driver terminated gracefully.")

if __name__ == "__main__":
    scrape_universities()
