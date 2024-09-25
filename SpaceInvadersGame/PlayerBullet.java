import java.awt.Image;

public class PlayerBullet extends Sprite2D
{
    private boolean isAlive = true; // See if the bullet is active or not
    private boolean needsRedraw = true; // Flag to indicate if the bullet needs to be redrawn
    public PlayerBullet(Image image, int windowWidth)
    {
        super(image, image);
        setWinWidth(windowWidth);
    }

    public boolean move(){
        if (!isAlive){
            return false; // If bullet is not active, no need to move

        }
        y -= 5; // Adjust bullet speed as needed
        if (y < 0 - myImage.getHeight(null)) {
            isAlive = false;
            return true; // Bullet out of screen, mark it as not alive
        }

        return false;
    }
    public void setAlive(boolean alive) {
        isAlive = alive;
    }
    public boolean needsRedraw() {
        return needsRedraw;
    }

    public boolean isAlive() {
        return isAlive;
    }
    public void setNeedsRedraw(boolean needsRedraw) {
        this.needsRedraw = needsRedraw;
    }
}


