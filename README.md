# I-ON-Communications---challenge

# Type "npm install" on terminal to install package then type "npm run dev" to run app.

# Estimate
# - Reading and review requirement: 2 hours.
# - Planning what components to use: 1 hour.
# - UI for admin page and consumer page: 3  hours.
# - Drag feature: 1 hour and a half.
# - Edit instance: 30 minutes.
# - Save and view instance in a new tab: 30 minutes.
# - Undo and redo: 1 hour and a half.
# - Write document: 2 hours


# Explain
# I created a type called TInstances with properties id, component, type, and props that have two properties inside text and message.

# I wrapped the app by context which is the name gloContext It has three states:
# gloInstances: is used to save and view instances in other tabs.
# past, future, and present: are used for undo, and redo features.

# I have two types of instance button or paragraph on the sidebar

# When dragging an item from the sidebar into the main section to create a new item for instance list and show exactly what type of item you toggle by the way checking the type property of an item in the instances list. When clicking any item in the instances list on the right we can edit it by a text input at the bottom.

# Click save i set the present instances list into gloInstances state and save it to localStorage to view in another tab. And every time the app runs I have a function to check instances list is already on localStorage or not. If not I will get it down.

# Redo and redo features I use past, future, and present on gloContext. We will have past instances list when present instances list more than 2. When the past list length is zero undo feature will not work. Drag item from sidebar present instance list will increase. Click undo button the present list will decrease one future list increase one and redo button is the opposite.