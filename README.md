# Pan De Vida UPCI Website

This folder is ready for GitHub Pages.

## Correct file structure

Upload the contents of this folder to the root of your GitHub repository:

- index.html
- about.html
- new-here.html
- ministries.html
- events.html
- watch.html
- prayer.html
- giving.html
- contact.html
- thanks.html
- assets/
  - styles.css
  - app.js

Do not upload the ZIP itself. Unzip it first, then upload all files and the `assets` folder.

## GitHub Pages setup

1. Open your repository.
2. Go to **Settings**.
3. Select **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**.
6. Click **Save**.
7. Wait one to three minutes, then refresh the Pages screen.

## Prayer form setup

The prayer form uses FormSubmit.

Before publishing:
1. Open `prayer.html`.
2. Find:
   `https://formsubmit.co/REPLACE-WITH-CHURCH-EMAIL`
3. Replace `REPLACE-WITH-CHURCH-EMAIL` with the church's official email address.
4. Commit the change.
5. Submit one test prayer request.
6. FormSubmit will send a confirmation email to activate the form.

Do not publish the prayer form until church leadership approves who receives requests.

## Giving

Current text-giving instruction in the website:
Text `give` to `(720) 704-1112`.

Confirm this with church leadership before launch.

## Updating events

Open `assets/app.js` and edit the `events` array.

## Livestream

The website links to:
- https://www.youtube.com/@pdvradioint
- https://www.youtube.com/@pdvradioint/live

The embedded player may require the channel's exact YouTube channel ID to display correctly. The direct "Open livestream" button will always send visitors to the official live page.

## Important launch checklist

- Confirm service times.
- Confirm the text-giving number.
- Add the official church email to the prayer form.
- Confirm Pastor Larry P. Romero's title and preferred wording.
- Add an official logo and approved church photos when available.
- Test every page on a phone.
