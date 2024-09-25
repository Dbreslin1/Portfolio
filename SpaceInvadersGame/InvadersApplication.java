import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.awt.image.*;
import java.util.ArrayList;
import java.util.Iterator;

public class InvadersApplication extends JFrame implements Runnable, KeyListener {

    private static String workingDirectory = "C:\\Users\\35383\\Downloads\\NextgenTech5";
    private static final Dimension WindowSize = new Dimension(800, 600);
    private BufferStrategy strategy;
    private static final int NUMALIENS = 30;
    private Alien[] aliensArray = new Alien[NUMALIENS];
    private Spaceship playerShip;
    private Image bulletImage;
    private Image alienImage1;
    private Image alienImage2;
    private Image shipImage1;

    private ArrayList<PlayerBullet> bulletList = new ArrayList<>();
    private int framesDrawn = 0;

    public InvadersApplication() {
        // Display the window, centred on the screen
        Dimension screensize = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
        int x = screensize.width / 2 - WindowSize.width / 2;
        int y = screensize.height / 2 - WindowSize.height / 2;
        setBounds(x, y, WindowSize.width, WindowSize.height);
        setVisible(true);
        this.setTitle("Space Invaders! .. (getting there)");

        // Load images from disk
        ImageIcon icon;
        icon = new ImageIcon("C:\\Users\\35383\\Downloads\\NextgenTech5\\alien_ship_1.png");
        alienImage1 = icon.getImage();
        icon = new ImageIcon("C:\\Users\\35383\\Downloads\\NextgenTech5\\alien_ship_2.png");
        alienImage2 = icon.getImage();
        icon = new ImageIcon("C:\\Users\\35383\\Downloads\\NextgenTech5\\player_ship.png");
        shipImage1 = icon.getImage();
        System.out.println("Ship Image Width: " + shipImage1.getWidth(null)); // Debug statement
        icon = new ImageIcon("C:\\Users\\35383\\Downloads\\NextgenTech5\\bullet.png");
        bulletImage = icon.getImage();

        // Create and initialize some aliens
        // create and initialise some aliens, passing them each the image we have loaded
        for (int i = 0; i < NUMALIENS; i++) {
            if (i < 10) {
                aliensArray[i] = new Alien(alienImage1, alienImage2); // Only two images needed
            } else {
                aliensArray[i] = new Alien(alienImage2, alienImage1); // Only two images needed
            }
            double xx = (i % 5) * 80 + 70;
            double yy = (i / 5) * 40 + 50; // integer division!
            aliensArray[i].setPosition(xx, yy);
        }
        Alien.setFleetXSpeed(2);

        // Create and initialize the player's spaceship
        playerShip = new Spaceship(shipImage1, shipImage1);
        playerShip.setPosition(300, 530);

        // Tell all sprites the window width
        Sprite2D.setWinWidth(WindowSize.width);

        // Create and start the animation thread
        Thread t = new Thread(this);
        t.start();

        // Send keyboard events arriving into this JFrame back to its own event handlers
        addKeyListener(this);

        // Initialize double-buffering
        createBufferStrategy(20);
        strategy = getBufferStrategy();
    }

    public void run() {
        while (true) {
            try {
                Thread.sleep(20);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            // Animate game objects
            boolean alienDirectionReversalNeeded = false;
            for (int i = 0; i < NUMALIENS; i++) {
                if (aliensArray[i].move()) {
                    alienDirectionReversalNeeded = true;
                }
            }
            if (alienDirectionReversalNeeded) {
                Alien.reverseDirection();
                for (int i = 0; i < NUMALIENS; i++) {
                    aliensArray[i].jumpDownwards();
                }
            }

            playerShip.move();
            Iterator<PlayerBullet> bulletIterator = bulletList.iterator();
            while (bulletIterator.hasNext()) {
                PlayerBullet bullet = bulletIterator.next();
                if (bullet.move()) {
                    bulletIterator.remove(); // Remove the bullet if it's out of bounds
                }

                // Check collision with each alien
                for (Alien alien : aliensArray) {
                    if (alien.isAlive() && isCollision(bullet, alien)) {
                        bullet.setAlive(false); // Mark bullet as inactive
                        alien.setAlive(false); // Mark alien as dead
                        // Add score or perform other actions upon hitting an alien
                    }
                }
            }

            // Force application repaint
            this.repaint();
        }
    }

    // application's paint method
    public void paint(Graphics g) {

        // Clear the off-screen buffer

        // Clear the canvas with a big black rectangle
        g.setColor(Color.BLACK);
        g.fillRect(0, 0, WindowSize.width, WindowSize.height);

        // Redraw all game objects
        for (Alien alien : aliensArray) {
            if (alien != null && alien.isAlive()) { // Check if alien is not null before accessing its methods
                alien.paint(g);
            }
        }

        // Redraw player ship if it's alive and needs to be redrawn
        if (playerShip != null && playerShip.isAlive() && playerShip.needsRedraw()) {
            playerShip.paint(g);
        }

        // Draw bullets
        for (PlayerBullet bullet : bulletList) {
            if (bullet.isAlive() && bullet.needsRedraw()) {
                bullet.paint(g);
            }
        }

        // Flip the buffers offscreen<-->onscreen
        strategy.show();

    }

    public void keyPressed(KeyEvent e) {
        if (e.getKeyCode() == KeyEvent.VK_LEFT) {
            playerShip.setXSpeed(-4);
        } else if (e.getKeyCode() == KeyEvent.VK_RIGHT) {
            playerShip.setXSpeed(4);
        } else if (e.getKeyCode() == KeyEvent.VK_SPACE) {
            fireBullet();
        }
    }

    public void keyReleased(KeyEvent e) {
        if (e.getKeyCode() == KeyEvent.VK_LEFT || e.getKeyCode() == KeyEvent.VK_RIGHT) {
            playerShip.setXSpeed(0);
        }
    }

    public void keyTyped(KeyEvent e) {
    }

    public void fireBullet() {
        PlayerBullet bullet = new PlayerBullet(bulletImage, WindowSize.width);
        bullet.setPosition(playerShip.x + playerShip.getImage().getWidth(null) / 2, playerShip.y);
        bullet.setAlive(true);
        bulletList.add(bullet);
    }

    public boolean isCollision(Sprite2D sprite1, Sprite2D sprite2) {
        int x1 = (int) sprite1.x;
        int y1 = (int) sprite1.y;
        int w1 = sprite1.getImage().getWidth(null);
        int h1 = sprite1.getImage().getHeight(null);

        int x2 = (int) sprite2.x;
        int y2 = (int) sprite2.y;
        int w2 = sprite2.getImage().getWidth(null);
        int h2 = sprite2.getImage().getHeight(null);

        return (x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2);
    }

    public static void main(String[] args) {
        workingDirectory = System.getProperty("user.dir");
        System.out.println("Working Directory = " + workingDirectory);
        InvadersApplication w = new InvadersApplication();
    }
}