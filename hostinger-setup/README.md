# Hostinger deployment helper — Millennium Automation

These helper files and instructions will make it easy to upload the static site exported from Superdesign.dev to Hostinger. I created the files in `hostinger-setup/` for you.

What I added
- `hostinger-setup/README.md` (this file)
- `hostinger-setup/contact.php` — a simple PHP mail handler you can use for contact forms
- `hostinger-setup/.htaccess` — recommended rules (HTTPS redirect, compression, caching)

What I could not do without your Hostinger account access
- Upload the site files to your Hostinger `public_html` for you
- Change DNS or enable SSL on Hostinger
- Test sending mail from the server (needs Hostinger environment)

Step-by-step (non-technical) guide
1. Download the exported ZIP from this repository:
   - https://github.com/ibullock01/Millennium-Automation-v2/raw/main/Millennium%20Automation%20V2-1767931062678.zip
   - Save it to your computer and extract it (double-click on most systems).

2. Check the extracted folder:
   - Make sure there is a file named `index.html` in the top level of the extracted folder. If `index.html` is inside another folder, move the contents so `index.html` is at the top level.

3. Add the helper files I provided:
   - You do NOT need to edit these files to upload them — but you should edit `hostinger-setup/contact.php` and change the `$to` email address to your email (instructions below).

4. Upload files to Hostinger (easiest method — no coding):
   - Log in to your Hostinger account and open hPanel.
   - Go to `Files` -> `File Manager`.
   - Open the `public_html` folder (this is the website root for your primary domain).
   - Click Upload and upload the entire exported site folder contents. You can upload the ZIP and use the `Extract` option in the file manager if you prefer.
   - Upload the following helper files to `public_html` as well:
     - `hostinger-setup/contact.php` -> move it to `public_html/contact.php`
     - `hostinger-setup/.htaccess` -> move it to `public_html/.htaccess`

5. Edit `contact.php` to set your email (very important):
   - In hPanel File Manager, locate `public_html/contact.php`, right-click and choose Edit.
   - Find the line:
     ```php
     $to = "you@your-domain.com"; // change this
     ```
     and replace `you@your-domain.com` with the email address where you want to receive contact form messages.
   - Save the file.

6. Test the site locally (optional) before full upload:
   - If you want to preview on your computer, in the extracted folder open a terminal and run `python3 -m http.server 8080` (macOS/Linux) and open http://localhost:8080 in your browser. Note: PHP will not run locally this way.

7. Point your domain to Hostinger (DNS):
   - If Hostinger will manage DNS: in your domain registrar, change the nameservers to the ones Hostinger gives you in hPanel.
   - Or (if you prefer to keep DNS at your registrar): create an A record for `@` pointing to the Hostinger server IP (find this in hPanel), and a CNAME for `www` pointing to `@` or add an A for `www` to the same IP.
   - If you’re unsure, Hostinger support can do this for you if you provide them access info.

8. Enable SSL on Hostinger:
   - In hPanel, go to `SSL` and install the free Let’s Encrypt certificate for your domain.
   - After installation, visit `https://your-domain.com` to confirm the site loads securely.

9. Test contact form:
   - Visit your site and submit the contact form. The test email will be sent using Hostinger’s mail system.
   - If you do not receive email, you may need to configure SMTP or contact Hostinger support and confirm outgoing mail is enabled for your hosting plan.

10. Need help? Tell me what step you’re stuck on and I’ll provide exact step-by-step guidance or sample screenshots.

Notes & security
- The provided `contact.php` is a minimal example. For production, consider adding spam protection (reCAPTCHA) and server-side validation. If you prefer a no-code option, you can use a service like Formspree or Getform instead.
- Keep backups of your site before you modify or overwrite files on Hostinger.
