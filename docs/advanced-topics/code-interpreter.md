# Code interpreter

Code Interpreter is a ChatGPT model that can directly execute Python code
that it generates.  It can match tasks to workflows so that
the results of data analysis might pick different next steps.
It can also handle uploads and downloads of dataset that is read by Python
or written by Python code.

We provide our models with a working Python interpreter in a sandboxed, firewalled execution environment, along with some ephemeral disk space. Code run by our interpreter plugin is evaluated in a persistent session that is alive for the duration of a chat conversation (with an upper-bound timeout) and subsequent calls can build on top of each other. We support uploading files to the current conversation workspace and downloading the results of your work.

## Sample Workflow