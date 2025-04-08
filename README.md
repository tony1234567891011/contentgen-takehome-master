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


#### Challenges:
- Develop a REST API using FastAPI that interfaces with an LLM (OpenAI GPT-3.5-turbo or similar)
- Implement prompt engineering to generate:
  - Compelling product descriptions
  - SEO-optimized titles and meta descriptions
  - Marketing copy in various formats (email, social media, etc.)
  - Missing product fields (categories, tags, features, etc.)
  - Image descriptions based on product data
  - Product image generation prompts for DALL-E or similar image generation models
- Create endpoints for:
  - Processing product data and generating content
  - Selecting different content types and formats
  - Customizing tone, length, and style of generated content
  - Generating product images based on product attributes

## Time Spent - 20 hours divided into: Up to 15 hours of coding + debugging and 5 hours to review any changes I would like to make.


### Setup Instructions

  #### Backend Setup
  1. Navigate to the `backend` directory
  2. Create a virtual environment: `python -m venv venv`
  3. Activate the virtual environment:
     - Windows: `venv\Scripts\activate`
     - macOS/Linux: `source venv/bin/activate`
  4. Install dependencies: `pip install -r requirements.txt`
  5. Create a `.env` file based on `.env.example` and add your LLM API key
  6. Run the application: `uvicorn app:app --host 0.0.0.0 --port 5000 --reload`

#### Frontend Setup
  1. Navigate to the `frontend` directory
  2. Install dependencies: `npm install`
  3. Start the development server: `npm start`
  4. The application should open at `http://localhost:3000`
