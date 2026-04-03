import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import sys

def run():
    url = sys.argv[1]
    
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    
    driver = webdriver.Chrome(options=options)
    
    try:
        driver.get(url)
        time.sleep(8)
        
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        
        # Scrape headings
        headings = soup.find_all(['h1', 'h2', 'h3'])
        for h in headings:
            print(f"{h.name}: {h.text.strip()}")
            
    except Exception as e:
        print("Error:", e)
    finally:
        driver.quit()

if __name__ == "__main__":
    run()
