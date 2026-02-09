from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def run_portfolio_test():
    driver = None
    try:
        # 1. Initialize Browser
        print("🚀 [1/6] Launching Browser...")
        driver = webdriver.Chrome()
        wait = WebDriverWait(driver, 10)

        # 2. Open your Portfolio (Make sure npm run dev is running!)
        url = "http://localhost:5173/#contact"
        print(f"🌐 [2/6] Navigating to: {url}")
        driver.get(url)

        # 3. Wait for the form elements to be visible
        print("🔍 [3/6] Searching for form fields...")
        
        # We use By.NAME because your React code has name="name", name="email", etc.
        name_input = wait.until(EC.presence_of_element_located((By.NAME, "name")))
        email_input = driver.find_element(By.NAME, "email")
        message_input = driver.find_element(By.NAME, "message")
        
        # Wait for submit button to be clickable
        submit_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//button[@type='submit']")))

        # 4. Fill the form
        print("✍️ [4/6] Filling the form...")
        name_input.clear()
        name_input.send_keys("Selenium Bot v2")
        time.sleep(0.5) 
        
        email_input.clear()
        email_input.send_keys("bot_v2@tester.com")
        time.sleep(0.5)
        
        message_input.clear()
        message_input.send_keys("Hello! This is run #2 of the automation test. 🤖")
        time.sleep(1)

        # 5. Submit!
        print("🖱️ [5/6] Clicking 'Send' button...")
        submit_button.click()

        # 6. Verify the alert
        print("🕒 [6/6] Waiting for success message (alert)...")
        wait.until(EC.alert_is_present())
        alert = driver.switch_to.alert
        print(f"✅ Alert Received: {alert.text}")
        
        # Accept the alert
        alert.accept()
        print("🎉 AUTOMATION SUCCESSFUL! The form works.")
        
        # Stay open
        time.sleep(5)

    except Exception as e:
        print(f"❌ TEST FAILED: {str(e)}")
    
    finally:
        if driver:
            print("🔌 Closing Browser.")
            driver.quit()

if __name__ == "__main__":
    run_portfolio_test()
