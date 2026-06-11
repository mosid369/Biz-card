# CALEX Digital Business Card

Static GitHub Pages-ready e-business card for Mohammed Siddique.

## Files

- `index.html` - the card markup and contact links
- `styles.css` - the full visual design
- `assets/profile.png` - portrait image
- `assets/contact-qr.svg` - QR code containing the vCard contact
- `mohammed-siddique.vcf` - downloadable contact card

## Host on GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. Go to **Settings > Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Select `main` and `/root`, then save.

GitHub will publish the card at:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/`

## Edit Details

Update the visible phone, email, website, LinkedIn URL, and service text in `index.html`.

Update the QR/contact download details in `mohammed-siddique.vcf`, then regenerate the QR:

```bash
python3 -m pip install reportlab
python3 tools/generate_qr.py
```
