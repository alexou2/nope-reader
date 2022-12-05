package utils;

public class Options {
    public String arguments(String args) {
        String ipadPath = "./ressources";
        String pcPath = "../../ressources";
        String path;

        switch (args) {
            case "-i": {
                path = ipadPath;
                break;
            }
            default: {
                path = pcPath;
            }
        }

        String htmlHeader = ("<!DOCTYPE html>\n"
                + "<html lang=\"en\">\n"
                + "<head>\n"
                + "<link rel=\"stylesheet\" href =\"" + path + "/manga.css\"/>\n"
                + "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\"\n>"
                + "<link rel=\"icon\" href=\"" + path + "/logo.png\" type=\"image/x-icon\" />\n"
                + "<meta charset=\"UTF-8\">\n"
                + "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n"
                + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
                + "<title>Manga Reader</title>\n"
                + "</head><body>\n"
                + "<div class=\"logo\">\n<img src =\"" + path + "/logo.png\">\n</div>\n");


        return htmlHeader;
    }

}
