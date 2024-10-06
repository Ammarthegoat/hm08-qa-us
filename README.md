TripleTen project 8 

Description
This project automates the end-to-end process of ordering a taxi using the Urban Routes application. The tests simulate a complete user journey from setting pickup and drop-off addresses to verifying the driver's arrival. The automation suite ensures each step works as expected, improving reliability and identifying potential issues early.

Features Tested
- Setting the pickup and drop-off addresses
- Selecting the Supportive plan
- Filling in the phone number
- Adding a credit card for payment
- Writing a message to the driver
- Ordering a blanket and handkerchiefs
- Ordering 2 ice creams for the ride
- Verifying the car search modal
- Checking driver information in the modal

Technologies Used
- WebdriverIO
- JavaScript 
- VSCode 
- DevOps tools


Setup Instructions
Step 1: Clone the Repository
Open your Terminal (or Git Bash if you’re on Windows).

Navigate to Your Projects Directory
If you don’t already have a projects folder, create one:

Copy code
cd ~               # Navigate to your home directory
mkdir projects     # Create a folder called "projects"
cd projects        # Change directory into the "projects" folder
Clone the Repository
Replace username with your GitHub username, then clone the repository:

Copy code
git clone git@github.com:username/hm08-qa-us.git
Step 2: Set Up the Project Locally
Navigate to the Project Directory

Copy code
cd hm08-qa-us
Install Project Dependencies
Run the following command to install all required dependencies:

Copy code
npm install

How to run the project
Ensure that you've added the necessary code to both page.js and createAnOrder.e2e.js.

Update the server URL in wdio.conf.js to the new server address.

Once everything is set, execute the following command in your terminal to start the test suite:

npm run wdio

