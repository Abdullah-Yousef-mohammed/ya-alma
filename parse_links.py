from bs4 import BeautifulSoup

with open("page_source.html", "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f.read(), "html.parser")
    links = set()
    for a in soup.find_all("a", href=True):
        links.add(a["href"])
    for l in sorted(links):
        print(l)
