import json
import time
from playwright.sync_api import sync_playwright

urls = [
    "https://your-uni.com/%d9%85%d8%b9%d9%87%d8%af-%d8%a7%d9%83%d8%b3%d9%84-excel/",
    "https://your-uni.com/%d9%85%d8%b9%d9%87%d8%af-els/",
    "https://your-uni.com/%d9%85%d8%b9%d9%87%d8%af-elc-%d9%85%d8%a7%d9%84%d9%8a%d8%b2%d9%8a%d8%a7/",
    "https://your-uni.com/%d9%85%d8%b9%d9%87%d8%af-elec-%d9%81%d9%8a-%d9%85%d8%a7%d9%84%d9%8a%d8%b2%d9%8a%d8%a7/",
    "https://your-uni.com/%d9%85%d8%b9%d9%87%d8%af-ems-%d9%81%d9%8a-%d9%85%d8%a7%d9%84%d9%8a%d8%b2%d9%8a%d8%a7/"
]

def extract_en_name(url):
    name = url.split('/')[-2]
    name = name.replace('%d9%85%d8%b9%d9%87%d8%af-', '').replace('-%d9%85%d8%a7%d9%84%d9%8a%d8%b2%d9%8a%d8%a7', '').replace('-%d9%81%d9%8a-', '')
    name = name.replace('%d8%a7%d9%83%d8%b3%d9%84-excel', 'Excel')
    return name.upper().replace('EXCEL', 'Excel')

results = []

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64)')
        
        for url in urls:
            try:
                print(f"Scraping {url}...")
                page.goto(url, wait_until='domcontentloaded')
                time.sleep(2)  # Give JS a moment
                
                # Title
                title = page.evaluate('() => document.querySelector("h1") ? document.querySelector("h1").innerText : ""')
                if not title:
                     title = extract_en_name(url) + " Language Center"
                     
                # Hero Image setup
                hero_image = page.evaluate('() => document.querySelector("meta[property=\'og:image\']") ? document.querySelector("meta[property=\'og:image\']").content : ""')
                
                # About text
                pars = page.evaluate('() => Array.from(document.querySelectorAll("p")).map(p => p.innerText.trim()).filter(t => t.length > 50)')
                about_paragraphs = []
                for t in pars:
                    if t not in about_paragraphs:
                        about_paragraphs.append(t)
                        
                aboutAr = ""
                if len(about_paragraphs) > 0:
                    aboutAr = about_paragraphs[0]
                    if len(about_paragraphs) > 1:
                        aboutAr += "\n\n" + about_paragraphs[1]
                
                data = {
                    "name": extract_en_name(url) + " Language Center",
                    "nameAr": title,
                    "url": url,
                    "aboutAr": aboutAr[:1500],
                    "heroImage": hero_image
                }
                results.append(data)
                print(f"Success! {title}")
            except Exception as e:
                print(f"Failed {url}: {e}")
                
        browser.close()

run()

with open("scraped_lcs.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=4, ensure_ascii=False)
