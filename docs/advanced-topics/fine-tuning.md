# Fine Tuning

Some generative tasks like generating multiple-choice questions require large prompts that can use up your token budgets and increase the cost of generating content.  We can lower the costs of these task-specific topics by fine-tuning GPT.  This is done by creating a file of prompt-response pairs as examples of what you want the large language model to return.

As of February of 2023, fine-tuning can only be done by people that have some experience with Python coding.  Many startup companies are working to make this easier and build custom applications that non-programmers can use.

OpenAI has extensive documentation on how to call the OpenAI APIs for fine-tuning here:

## References

2. [Fine-tuning a Classifier to Improve Truthfulness](https://help.openai.com/en/articles/5528730-fine-tuning-a-classifier-to-improve-truthfulness)
2. [OpenAI GPT-3 Fine tuning Guide, with examples](https://harishgarg.com/writing/how-to-fine-tune-gpt-3-api/)