import requests
from bs4 import BeautifulSoup
import json
import re

urls = [
    "https://your-uni.com/%d9%85%d8%b9%d9%87%d8%af-%d8%a7%d9%83%d8%b3%d9%84-excel/",
    "https://your-uni.com/%d9%85%d8%b9%d9%87%d8%af-els/",
    "https://your-uni.com/%d9%85%d8%b9%d9%87%d8%af-elc-%d9%85%d8%a7%d9%84%d9%8a%d8%b2%d9%8a%d8%a7/",
    "https://your-uni.com/%d9%85%d8%b9%d9%87%d8%af-elec-%d9%81%d9%8a-%d9%85%d8%a7%d9%84%d9%8a%d8%b2%d9%8a%d8%a7/",
    "https://your-uni.com/%d9%85%d8%b9%d9%87%d8%af-ems-%d9%81%d9%8a-%d9%85%d8%a7%d9%84%d9%8a%d8%b2%d9%8a%d8%a7/"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def extract_en_name(url):
    name = url.split('/')[-2]
    name = name.replace('%d9%85%d8%b9%d9%87%d8%af-', '').replace('-%d9%85%d8%a7%d9%84%d9%8a%d8%b2%d9%8a%d8%a7', '').replace('-%d9%81%d9%8a-', '')
    name = name.replace('%d8%a7%d9%83%d8%b3%d9%84-excel', 'Excel')
    return name.upper().replace('EXCEL', 'Excel')

results = []

for url in urls:
    try:
        print(f"Scraping {url}...")
        res = requests.get(url, headers=headers)
        soup = BeautifulSoup(res.text, 'html.parser')
        
        # Title
        title_tag = soup.find('h1')
        title = title_tag.text.strip() if title_tag else extract_en_name(url) + " Language Center"
        
        # Meta Image / Hero
        hero_image = ""
        og_image = soup.find("meta", property="og:image")
        if og_image:
            hero_image = og_image["content"]
            
        # Try to find a logo (usually img with class containing logo or in header)
        logo_url = hero_image # default
        
        # About text (paragraphs inside main content)
        pars = soup.find_all('p')
        about_paragraphs = []
        for p in pars:
            text = p.get_text(strip=True)
            if len(text) > 50 and text not in about_paragraphs:
                about_paragraphs.append(text)
                
        aboutAr = ""
        if len(about_paragraphs) > 0:
            aboutAr = about_paragraphs[0] + "\n\n" + (about_paragraphs[1] if len(about_paragraphs)>1 else "")
            
        # Construct JSON obj
        data = {
            "name": extract_en_name(url) + " Language Center",
            "nameAr": title,
            "url": url,
            "aboutAr": aboutAr[:1500], # Trucate just in case
            "heroImage": hero_image
        }
        results.append(data)
    except Exception as e:
        print(f"Failed {url}: {e}")

with open("scraped_lcs.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=4, ensure_ascii=False)
    
print("Done scraping!")
