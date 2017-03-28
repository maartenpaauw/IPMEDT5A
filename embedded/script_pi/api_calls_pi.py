import requests

def main():
    auth_count = 0

    # Get authentication token. Execute only once
    if (auth_count == 0):
        r = requests.post('http://146.185.180.248/api/authenticate', data={
            'email': 'youremail',
            'password': 'yourpassword'
        })
        request_token = r.json()['token']
        auth_count += 1

    # Authentication check to see if token still valid
    check = requests.post('http://146.185.180.248/api/authenticate/check', headers={
        "Authorization": "Bearer " + request_token
    })


    # GET request for API shelves
    if check.status_code == 200:
        get_shelves = requests.get('http://146.185.180.248/api/shelves/', headers={
            "Authorization": "Bearer " + request_token
        })

    # GET request for check kan_aanpassen
    if check.status_code == 200:
        kan_aanpassen = requests.get('http://146.185.180.248/api/settings/kan_aanpassen/', headers={
            "Authorization": "Bearer " + request_token
        })


    # POST request to add new shelve (needs to be surrounded by check if already exists)
    if check.status_code == 200:
        # CODE FOR REQUESTING MAC ADRESS OF ARDUINO/SHELVE
        mac_adress = 0
        post_shelve = requests.get('http://146.185.180.248//api/shelves/' + mac_adress + '/connect/', headers={
            "Authorization": "Bearer " + request_token
        })

    # POST request to link new demo shoe to shelve, first commence check 'kan_aanpassen'
    # CHECK IF KAN_AANPASSEN
    # //
    if check.status_code == 200:
        # CODE FOR REQUESTING UUID OF TAG
        # //
        uuid_tag = 0
        post_link_shoe = requests.get('http://146.185.180.248/api/shelves/' + mac_adress + '/demos/' + uuid_tag + '/scanned/', headers={
            "Authorization": "Bearer " + request_token
        })

    # POST request for shoe size tag
    # code for requesting uuid and mac adress
    # //
    if check.status_code == 200:
        post_shoe_size_tag = requests.get('http://146.185.180.248/api/shelves/' + mac_adress + '/tags/' + uuid_tag + '/scanned/', headers={
            "Authorization": "Bearer " + request_token
        })
    # Returns three shoe values, need to be pushed to arduino and eventually displayed on display


    # POPST request when button is pressed
    # code to check if button is pressed
    # //
    if check.status_code == 200:
        get_button_action = requests.get('http://146.185.180.248/api/shelves/' + mac_adress + '/actions/button_pressed/', headers={
            "Authorization": "Bearer " + request_token
        })

    # POST request when shoe is picked up
    if check.status_code == 200:
        get_picked_up_state = requests.get('/api/shelves/' + mac_adress + '/actions/picked_up/', headers={
            "Authorization": "Bearer " + request_token
        })

    # GET request with information about demo sho
    if check.status_code == 200:
        get_shoe_info = requests.get('/api/shelves/' + mac_adress + '/', headers={
            "Authorization": "Bearer " + request_token
        })


if __name__ == '__main__':
    main()
