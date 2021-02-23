import os
from os import path

def readFile(lines, outputFile):
  for line in lines:
    if (line[0:3] == '## '):
      newLine = line[3:]
      outputFile.write("{type:'title',val:'" + newLine + "'},")
    else:
      outputFile.write("{type:'text',val:'" + newLine + "'},")
    

def convert(filename, outputname):
  with open(filename, 'r') as inputFile:
    lines = inputFile.read().splitlines() # This will ignore the newline sign
    outputFile = open(outputname, 'w')
    outputFile.write("let article={type:'article',")
    validFileName = False
    validFileTitle = False
    for line in lines[0:3]:
      if (line[0:3] == '$n '):
        newLine = line[3:]
        validFileName = True
        outputFile.write("name:'" + newLine + "',")
      elif (line[0:3] == '#  '):
        validFileTitle = True
        newLine = line[3:]
        outputFile.write("title:'" + newLine + "',")
    if (validFileTitle and validFileName):
      outputFile.write('body:[')
      readFile(lines[2:], outputFile)
      outputFile.write(']}')

def main():
  filename = 'test'
  inputname = filename + '.txt'
  outputname = filename + '.js'
  if path.exists(inputname):
    convert(inputname, outputname)
  else:
    print('Input file does not exist, please enter a valid filename')

if __name__== "__main__":
   main()