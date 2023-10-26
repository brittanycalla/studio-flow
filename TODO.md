# Smaller Tasks
[X] Change all anchor elements -> <Link /> components and href -> to
[X] Fix styling for anchor element states in <Layout />
  [X](:focus)
  [X](:active)
[] Componentize all svgs
[X] Highlight/show default selected sort field for <TableHeaderButton />
[] Fade in elements while rendering (add loading states)
  [X] Dashboard stats
  [] Tables
[] Add a createdAt field to all DB objects
[X] Cleanup unecessary console.logs on backend
[X] Add delete shoot button to Shoot Details view
  - Will need navigate() - see rascal video @ 5:23
  - See cascading delete task
[] Build out item pages for editing
[] Fix clickable ShotTable rows
[] Organize Item and Shoot Input
[] Fix styling on "Add an Item to this Shoot" menu
[] Fix Shoot Details mobile view

# Medium
[X] Figure out logic for rendering protected outlets (ex: logo should go to Dashboard when logged in, and landing page when logged out)
[] How to redirect index to app when logged in
[X] Make side bar close after clicking link (sidebar isOpen / isClosed?)
[X] Mobile views for Shot, Item, and Shoot tables
[X] Add statuses to shoots and shots
  - See rascal video @ 5:20
[] Add sort by dropdown option to mobile views
[X] QC dashboard dates - Saturdays and Sundays not showing up
[] If no shoots, items, or shots, give a prompt to create one
[X] Add delete warnings
[X] Add cascading delete - when a shoot or item is deleted, all corresponding shots get deleted (warning is needed)
[] Trouble shoot double HTTP requests
[X] Fill in shot count (0) when adding new shoot
[X] MongoDB script to auto update shoot dates weekly
[] CSV bulk uploads*
[] Add choose-your-own emoji icons for shoots (ala Notion)*
[] Table search and filtering*

# Large
[X] Complete all basic functionality
[] Add ability to EDIT shoots, items, and shots
  [] Look up UI design inspo
[] Fix backend getShoot functionality - shoot formatting should match across Dashboard and Shoots views + controllers
  [X] Add status to Shoot Detail page
[IN-PROGRESS] Redesign landing page
  [] Choose a new font for body
[] Componentize wherever possible (tables, breadcrumbs, etc.)
[] Handle errors on backend (send back json rather than console logging) ~5:10 in video
[] Review and remove unnecessary comments
[] Accessibility
[] Add ability to configure system (ex: add your own content types)

* feature release

# Random
- TBD shoots
- Assign items to shoots, view all shoots an item is featured in, item status
- From Dashboard, ability to paginate through weeks ahead
- Admin and users
  - Profile page
- Add your own fields?
- Change password/account management
- Add ability to add notes to shoots
- Add ability to add notes to items
- Add ability to add notes to shots
- Add barcodes to items
- Add metadata sheet generation

# Bugs
[X] Filters not working in shoot table ( because of formatting on shot response )
[Maybe not?] Menu open by default in mobile view
[Fixed?] Adding shoot not working properly due to shoot status function