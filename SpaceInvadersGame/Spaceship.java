import java.awt.Image;

public class Spaceship extends Sprite2D {
    private boolean alive = true;
    private boolean needsRedraw = true; // Assuming the ship always needs to be redrawn initially

    public Spaceship(Image image1, Image image2) {
        super(image1, image2); // invoke constructor on superclass Sprite2D
    }



    public void move() {
        // apply current movement
        x+=xSpeed;

        // stop movement at screen edge?
        if (x<=0) {
            x=0;
            xSpeed=0;
        }
        else if (x>=winWidth-myImage.getWidth(null)) {
            x=winWidth-myImage.getWidth(null);
            xSpeed=0;
        }
    }
    public boolean isAlive() {
        return alive;
    }

    public void setAlive(boolean alive) {
        this.alive = alive;
    }

    public boolean needsRedraw() {
        return needsRedraw;
    }

    public void setNeedsRedraw(boolean needsRedraw) {
        this.needsRedraw = needsRedraw;
    }
}
