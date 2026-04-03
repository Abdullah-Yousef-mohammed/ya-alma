from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import time
import json
import sys

def get_page_source(url):
    options = Options()
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    
    driver = webdriver.Chrome(options=options)
    try:
        driver.get(url)
        time.sleep(5) # Wait for Cloudflare or JS to load
        return driver.page_source
    finally:
        driver.quit()

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python scraper.py <url>")
        sys.exit(1)
        
    source = get_page_source(sys.argv[1])
    with open("page_source.html", "w", encoding="utf-8") as f:
        f.write(source)
    print("Saved to page_source.html")
