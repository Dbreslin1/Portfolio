import java.awt.*;

public class Sprite2D {

    // member data
    protected double x,y;
    protected Image myImage;
    protected Image myImage2;
    protected int framesDrawn = 0;
    protected int currentFrame = 0;
    protected double xSpeed=0;
    // static member data
    protected static int winWidth;

    // constructor
    public Sprite2D(Image image1, Image image2) {
        myImage = image1;
        myImage2 = image2;

    }

    public void setPosition(double xx, double yy) {
        x=xx;
        y=yy;
    }
    public void setXSpeed(double dx) {
        xSpeed=dx;
    }
    public void paint(Graphics g) {
        framesDrawn++;
        if (framesDrawn%100<50){
            g.drawImage(myImage, (int)x, (int)y, null);
        }
        else{
            g.drawImage(myImage, (int)x, (int)y, null);
        }
    }
    public Image getImage() {
        // Return the current image being used
        if (framesDrawn % 100 < 50) {
            return myImage;
        } else {
            return myImage2;
        }
    }
    public static void setWinWidth(int w) {
        winWidth = w;
    }
}