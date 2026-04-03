import urllib.request
import urllib.parse
import json

def run():
    url = "http://localhost:8080/api/config/mainNavigation"
    req = urllib.request.Request(url)
    
    try:
        response = urllib.request.urlopen(req)
        data = json.loads(response.read().decode('utf-8'))
        
        setting_value = data.get("settingValue", "[]")
        
        # Replace the data science search link
        new_setting_value = setting_value.replace("/courses?search=data science", "/specializations/data-science")
        
        # Prepare the POST request
        post_url = "http://localhost:8080/api/config"
        post_data = json.dumps({
            "settingKey": "mainNavigation",
            "settingValue": new_setting_value
        }).encode('utf-8')
        
        post_req = urllib.request.Request(post_url, data=post_data, headers={'Content-Type': 'application/json'})
        post_response = urllib.request.urlopen(post_req)
        
        print("Updated mainNavigation config for Data Science:", post_response.status)
        
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    run()
