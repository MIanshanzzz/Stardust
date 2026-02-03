import requests

# Search for blogwatcher on GitHub
url = 'https://api.github.com/search/repositories?q=blogwatcher+in:name&per_page=5'
response = requests.get(url)
results = response.json()

print("Found blogwatcher repositories:")
print("="*60)
for item in results['items']:
    print(f"Name: {item['name']}")
    print(f"URL: {item['html_url']}")
    print(f"Description: {item['description']}")
    print("-"*60)
