import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class DbFixer {
    public static void main(String[] args) {
        try {
            Class.forName("org.h2.Driver");
            Connection conn = DriverManager.getConnection("jdbc:h2:file:./ya-alma-legacy-api/data/testdb", "sa", "");
            Statement stmt = conn.createStatement();
            
            System.out.println("Adding sort_order column...");
            try {
                stmt.execute("ALTER TABLE consultant ADD COLUMN sort_order INT DEFAULT 1");
                System.out.println("Success.");
            } catch (Exception e) {
                System.out.println("Skipped: " + e.getMessage());
            }

            System.out.println("Adding is_active column...");
            try {
                stmt.execute("ALTER TABLE consultant ADD COLUMN is_active BOOLEAN DEFAULT TRUE");
                System.out.println("Success.");
            } catch (Exception e) {
                System.out.println("Skipped: " + e.getMessage());
            }
            
            stmt.close();
            conn.close();
            System.out.println("Done.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
