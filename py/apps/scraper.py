import requests
from bs4 import BeautifulSoup

URL = "https://www.amazon.in/gp/product/B07KJWRBCS?pf_rd_p=649eac15-05ce-45c0-86ac-3e413b8ba3d4&pf_rd_r=Q9A0NWAT5DPX5JR4E1NF"

headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.106 Safari/537.36"}

page = requests.get(URL,headers=headers)

soup = BeautifulSoup(page.content,'html.parser')

title = soup.find(id="productTitle")

print(title)


