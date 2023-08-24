# Generating Sample Code

ChatGPT is also very good at generating sample software programs for your classrooms. 
You can start with simple examples and then dive into more complex examples.

There are two ways you can learn this process.  First, is to just use the standard ChatGPT.  If you have a subscription to ChatGPT Plus you can use the [Code Interpreter] to also generate and execute the code.  If there is a Python library that can generate images you can also have ChatGPT Code Interpreter it generate images!

## Simple Prompt

```linenums="0"
Create a Python program that prints "Hello World!"
```

## Response

```python
print("Hello World!")
```

## More Complex Prompt

### Prompts

Single Function:

```linenums="0"
Create a python function that resizes images to all be 512X512
```

Bulk Transformation

```linenums="0"
Generate a Python function that will take a folder that includes images of many sizes.  Have it go through each image and convert it into a 512x512 image and place it in a second folder.  The function takes two parameters: the input folder and the output folder.
```

### Response

```py
from PIL import Image
import os

def resize_images(input_folder, output_folder):
    # Check if output_folder exists. If not, create it
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # List all files in the input folder
    for filename in os.listdir(input_folder):
        # Full file path
        filepath = os.path.join(input_folder, filename)

        # Check if it's a file (and not a directory)
        if os.path.isfile(filepath):
            try:
                # Open the image using Pillow
                with Image.open(filepath) as im:
                    # Resize the image to 512x512
                    im_resized = im.resize((512, 512))
                    
                    # Save the resized image to the output folder
                    im_resized.save(os.path.join(output_folder, filename))

            except Exception as e:
                print(f"Error processing {filename}: {e}")

print("Processing completed!")

# Example of usage
# resize_images('path_to_input_folder', 'path_to_output_folder')
```