
import pyautogui
import time
import openpyxl

workbook = openpyxl.load_workbook('data.xlsx')

sheet = workbook.active
first_row = True

time.sleep(5)

for row in sheet.iter_rows():
    if first_row:
        first_row = False
        continue  # Skip the first row

    schema = row[0].value if row[0].value is not None else 'None'
    method = row[1].value if row[1].value is not None else 'None'
    href = row[2].value if row[2].value is not None else 'None'
    desc = row[3].value if row[3].value is not None else 'None'
    send = row[4].value if row[4].value is not None else 'None'
    
    # print(href)
    text = ''
    if schema  != 'None':
        text += schema + '\n'

    text += '['+ method + ']' + ' -> ' + href + '\n' + '\t Description: ' + desc + '\n' + '\t Send: JSON object which contains ' + send + '\n' + '\t Receive: 200 if success, otherwise fail\n\n'

    for char in text:
        pyautogui.typewrite(char, interval=0.0005)
        # time.sleep(0.00000001)


# Method = str(input('Method: '))
# Href = str(input('Href: '))
# Request = str(input('Request: '))
# Description = str(input('Description: '))
# Send = str(input('Send: '))

# time.sleep(5)

# for char in text:
#     pyautogui.typewrite(char)
#     time.sleep(0.00001)


# 