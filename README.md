# i95dev AI Engineering Intern - Take-Home Assignment
## AI-Powered Product Description Generator

Complete the assignment within 7 days of receiving it
Submit by replying to the original assessment email with:
GitHub repository link
Brief overview of your approach (1-2 paragraphs)
Any challenges you faced and how you overcame them
Time spent on the assignment

Welcome to Tony Lin's submission to the i95dev AI Engineering Intern take-home assignment! Below, I will explain all of my methodologies, challenges, and the resources I spent into this project.

As a brief overview, my job is to build a product description generator that leverages LLMs to create compelling, SEO-optimized product descriptions and marketing copy based on basic product information. The system should also be able to generate missing product fields and product images using all available product data.

### Methodologies:

#### Prompt Engineering

#### Challenges:
- Navigating through code to add front-end features, and organizing React components in a nice manner. Added comments to help me implement features without forgetting what the code above does
- Familiarizing and utilizing technologies like FastAPI to create the complete product endpoint. Learned every type of endpoint, used Post endpoint to complete products.
- UX dilemmas - Figuring how ways to improve how the user interface could be more intuitive. Removed unncessary 
- Compatibility issues with my technologies, as my first alternative was using Gemini, however defaulted to OpenAI API due to Pydantic 1.10.7.
- Frontend backend sync errors, leading to products.json failing to show, or failing to generate. Fixed by rebuilding the API endpoint, returning in json format.


## Time Spent - 20 hours divided into: 5 hours of familiarizing with tech stack, Up to 10 hours of coding + debugging and 5 hours to review any changes I would like to make.


### Setup Instructions

  #### Backend Setup
  Note: Ensure you are using Python 3.11 or lower.
  1. Navigate to the `backend` directory
  2. Create a virtual environment: `python -m venv venv`
  3. Activate the virtual environment:
     - Windows: `venv\Scripts\activate`
     - macOS/Linux: `source venv/bin/activate`
  4. Install dependencies: `pip install -r requirements.txt`
  5. Create a `.env` file containing:
     
     OPENAI_API_KEY
      MODEL_NAME=[MODEL NAME]
      MAX_TOKENS=[Token Number HERE]
      TEMPERATURE=[TEMPERATURE_VALUE]
      DATA_PATH=data/products.json
    
  7. Run the application: `uvicorn app:app --host 0.0.0.0 --port 8000 --reload` (Note: Change port to 5000 in source code, then run port 5000. For MacOS, cannot use port 5000.)

#### Frontend Setup
  1. Navigate to the `frontend` directory
  2. Install dependencies: `npm install`
  3. Start the development server: `npm start`
  4. The application should open at `http://localhost:3000`
