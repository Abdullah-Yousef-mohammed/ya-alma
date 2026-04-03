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
        
        new_setting_value = setting_value.replace("/courses?search=computer engineering", "/specializations/computer-engineering")
        new_setting_value = new_setting_value.replace("/courses?search=biomedical", "/specializations/biomedical-engineering")
        new_setting_value = new_setting_value.replace("/courses?search=mechatronics", "/specializations/mechatronics")
        new_setting_value = new_setting_value.replace("/courses?search=robotics", "/specializations/robotics")
        
        # Prepare the POST request
        post_url = "http://localhost:8080/api/config"
        post_data = json.dumps({
            "settingKey": "mainNavigation",
            "settingValue": new_setting_value
        }).encode('utf-8')
        
        post_req = urllib.request.Request(post_url, data=post_data, headers={'Content-Type': 'application/json'})
        post_response = urllib.request.urlopen(post_req)
        
        print("Updated mainNavigation config for Engineering Specializations:", post_response.status)
        
    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    run()
