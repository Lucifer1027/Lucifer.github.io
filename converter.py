import os
from os import path

def readParagraph(lines, outputFile):
  j = 0 # iterator
  while (lines[j] is not None) and (lines[j][0:3] == '#  '):
    print(lines[j])
    # newLine = lines[j][3:]
    # outputFile.write("{type:'text',val:'" + newLine + "'},")
    j += 1
  return j

def readFile(lines, outputFile):
  i = 0
  print(lines[10] == None)
  # while lines[i] is not None:
  #   if lines[i][0:3] == '## ':
  #     newLine = lines[i][3:]
  #     outputFile.write("{title:'" + newLine + "',body:[")
  #     i += readParagraph(lines[i+1:], outputFile)
  #     outputFile.write("]},")
  #   else: i += 1
    

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
      outputFile.write('paragraphs:[')
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