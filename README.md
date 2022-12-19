# nope-reader
creates html files to view manga chapters. Works both on IOS and on PC/ mac.

How to use:

1) if this your first time using this program, you need to create a new folder: `manga` (without the quotes).
2) inside the manga folder, you will also need to create a new folder for each manga you download. Try to use short names as you will have to type the name every time you want to add a new chapter.
3) Now you can download any manga wou want with ctrl+ s and save the page on your pc.
4) move the files from where they are on your computer and move them in the folder you just created for the manga.

The result shoud look someting like this:


> manga
>
> │   └── Deamon slayer
>
> │       ├── Chapter1
>
> │       │   ├── page1.jpg
>
> │       │   ├── page2.jpg
>
> │       │   ├── page3.jpg
>
> │       │   ├── javascript.js
>
> │       │   ├── Chapter1.html
>
> │       │   ├── style.css


and so on and so forth... (the names your files will certainly be different)

5) Once everything is set up, you can run the code. 
  On windows run the `nope.bat` file thet is provided. 
  On linux, open a terminal window and type `chmod +x nope.sh`. then run the shellscript with `./nope.sh`.
  You can also type `java src/Main.java` (on linux) and `java src\Main.java` (on windows) in `nope-reader`

If you want to, you can add `-i` in the command line to generate a page that runs on IOS. You will have to copy the `ressources` folder in your manga folder.

If you encounter issues, feel free to reach out to me by creating an issue. Also, be sure to pull the project frequently, as there is probably already a fix for your issue.
