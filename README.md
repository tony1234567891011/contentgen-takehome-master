# i95dev AI Engineering Intern - Take-Home Assignment
## AI-Powered Product Description Generator

As a brief overview, my job is to build a product description generator that leverages LLMs to create compelling, SEO-optimized product descriptions and marketing copy based on basic product information. The system should also be able to generate missing product fields and product images using all available product data.

### Methodologies:
#### Prompt Engineering:
My approach when it comes to creating an effect prompt, specifically for product generation, I use role specific prompting, to set the context for LLMs. This sets the stage, giving them an idea of what the response should appear, giving a guide in the tone, formatting and content structure. Next, then I construct the details dynamically using fields from product_data and style dictionaries. Product attributes like brand, price, features are added conditionally. Style preferences such as tone, length audience can influence tone and how verbose the response is. Conditionally, the tags and keywords are added(image) to increase quality of responses, tailored to the user. In addition, outputs are structured with explicit instructions and formatting, such as the SEO:


***Title: [SEO TITLE]***
  
  ***Description: [SEO DESCRIPTION]***

  It allows us to guide LLM toward outputs that can be easily parsed in parsing specific functions, also reducing error in retaining information.

  Moreover, I implemented tailored prompting for different types of generations, with varied lengths, product descriptions focusing on benefits, vivid language and sensory appeal. SEO content leverages keywords, email include tonal styling, with image prompts including contextual placements. It follows domain specific practices for the content type.

Ultimately, it focuses on modularity, contextual and customizable, while having maintaining a balanced consistent output. This was achieved by feeding data dynamically, and structing output clearly for parsing.

#### Overall Project:
My approach to this project was to focus on the core functionality, which was generating content. Then expanding on that, I added an addenum which is the user keyword inputs to tailor images. I knew that my frontend development skills were not as advanced, thus I would spend most of my time debugging problems, and I would allot most of my effort into improving the existing user look with implementing core features such as editing generated prompts. Backend wise, it was simple to implement my own endpoints as needed to supplment core functionality such as the "complete content" button, as well as "generate content" for products in ``products.json.``
To reflect, if I managed my time better, I believe that it would have allowed me to implement a lot more features.

#### Challenges:
- Navigating through code to add front-end features, and organizing React components in a nice manner. Added comments to help me implement features without forgetting what the code above does
- Familiarizing and utilizing technologies like FastAPI to create the complete product endpoint. Learned every type of endpoint, used Post endpoint to complete products.
- UX dilemmas - Figuring how ways to improve how the user interface could be more intuitive. Removed unncessary 
- Compatibility issues with my technologies, as my first alternative was using Gemini, however defaulted to OpenAI API due to Pydantic 1.10.7.
- Frontend backend sync errors, leading to products.json failing to show, or failing to generate. Fixed by rebuilding the API endpoint, returning in json format.
- Time management, which was solved by planning out time to implement each feature.
- LLM's hallucinating with some inputs especially relating to backgrounds, improved its content accuracy through providing real time examples, information.
  
## Time Spent - 20 hours divided into: Up to 10 hours of coding + debugging and 5 hours to review any changes I would like to make and 5 hours to familiarise with tech stack.

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
