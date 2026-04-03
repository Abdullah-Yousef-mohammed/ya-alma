import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def run():
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    driver = webdriver.Chrome(options=options)
    
    url = "https://your-uni.com/%d8%aa%d8%ae%d8%b5%d8%b5-%d8%a7%d9%84%d8%b0%d9%83%d8%a7%d8%a1-%d8%a7%d9%84%d8%a7%d8%b5%d8%b7%d9%86%d8%a7%d8%b9%d9%8a/"
    print("Navigating...")
    driver.get(url)
    time.sleep(15)  # Wait for cloudflare
    
    html = driver.page_source
    with open("ai_dump.html", "w", encoding="utf-8") as f:
        f.write(html)
        
    print("Saved to ai_dump.html")
    driver.quit()

if __name__ == "__main__":
    run()
