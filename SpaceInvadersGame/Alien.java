import java.awt.Image;

public class Alien extends Sprite2D {
    private static double xSpeed=0;
    private boolean isAlive = true; // See if the alien is alive or not
    private boolean needsRedraw = true; // Assuming the alien always needs to be redrawn initially
    public Alien(Image image1, Image image2) {
        super(image1, image2);
    }

    // public interface
    public boolean move() {
        if (!isAlive){
            return false;
        }
        x += xSpeed;
        if (x <= 0 || x >= winWidth - myImage.getWidth(null)){
            return true;
        }
        else{
            return false;
        }
        /*
        x+=xSpeed;

        // direction reversal needed?
        if (x<=0 || x>=winWidth-myImage.getWidth(null))
            return true;
        else
            return false;
            */
    }

    public static void setFleetXSpeed(double dx) {
        xSpeed=dx;
    }

    public static void reverseDirection() {
        xSpeed=-xSpeed;
    }

    public void jumpDownwards() {
        y+=20;
    }

    public void setAlive(boolean alive) {
        isAlive = alive;
    }

    public boolean isAlive() {
        return isAlive;
    }
    public boolean needsRedraw() {
        return needsRedraw;
    }

    public void setNeedsRedraw(boolean needsRedraw) {
        this.needsRedraw = needsRedraw;
    }
}
