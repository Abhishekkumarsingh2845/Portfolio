from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

def test_setup():
    # Initialize the Chrome driver
    # Selenium Manager (builtin) will handle the driver automatically
    driver = webdriver.Chrome()

    try:
        # Navigate to a website
        print("Opening Google...")
        driver.get("https://www.google.com")

        # Get the title
        title = driver.title
        print(f"Page Title: {title}")

        # Wait for a few seconds to see the result
        time.sleep(3)
        
        if "Google" in title:
            print("Setup Successful!")
        else:
            print("Setup failed to find Google.")

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        # Close the browser
        driver.quit()

if __name__ == "__main__":
    test_setup()
