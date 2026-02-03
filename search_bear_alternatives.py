import requests

# Search for bear notes alternatives on GitHub
url = 'https://api.github.com/search/repositories?q=bear+notes+markdown+notes+windows+in:name&per_page=5'
response = requests.get(url)
results = response.json()

print("Found bear notes alternatives:")
print("="*60)
for item in results['items']:
    print(f"Name: {item['name']}")
    print(f"URL: {item['html_url']}")
    print(f"Description: {item['description']}")
    print("-"*60)
