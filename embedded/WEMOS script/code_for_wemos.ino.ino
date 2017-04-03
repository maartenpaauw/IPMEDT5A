#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoOTA.h>
#include <Ticker.h>
#include <WiFiClientSecure.h>

bool shoe_on_shelf;
bool pickedUp = false;
int trackingpin = 5;

String SERVER_ADDRESS = "https://ipmedt5.roddeltrein.nl/";
int buttonState = 0;

const char* ssid = "IPMEDT5A-AP";
const char* password = "raspberry";

int sendData(String url) {
  Serial.println(url);
  HTTPClient http;
  String token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHBzOlwvXC9pcG1lZHQ1LnJvZGRlbHRyZWluLm5sXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ5MTIxMjkzNSwiZXhwIjoxNDkxMjk5MzM1LCJuYmYiOjE0OTEyMTI5MzUsImp0aSI6ImEyN2M3MDAwNjk0Zjk1ZDg0YzE4OWFjNjczN2Y1MzlmIn0.kqSnldEhO4Rco8nOrDLAKluDllZYSNE1R_kSEuDJ2j4";
  http.begin(url);
  http.addHeader("Content-Type",  "application/json;charset=UTF-8");
  http.addHeader("Authorization", String("Bearer ") + token);
  http.POST("");
  Serial.printf("Payload: [%s]\n", http.getString().c_str());
  http.writeToStream(&Serial);
  http.end();
}

void connect(){
    
}

void measureTracking() {
        
  String mac_address = WiFi.macAddress();
  
  if (digitalRead(trackingpin) == 1)
  {
    shoe_on_shelf = true;
    pickedUp = false;
  }
  else
  {
    shoe_on_shelf = false;
  }

  if (shoe_on_shelf == false && pickedUp == false)
  {
    pickedUp = true;
    Serial.print("Send POST to back end");
    String url = "https://ipmedt5.roddeltrein.nl/api/shelves/C5:D2:F1:C4:B4:7E/actions/picked_up";
    sendData(url);
   
  }
  else
  {
      Serial.println("Shoe still on shelf");
  }
}

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  
  if (WiFi.waitForConnectResult() != WL_CONNECTED) {
    Serial.println("Connection Failed! Rebooting...");
    delay(5000);
    ESP.restart();
  }
  else 
  {
    Serial.println("Connected!");
  }
  Serial.println("Ready");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

}

void loop() {
    measureTracking();
    delay(2000);
}


