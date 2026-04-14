package com.yaalma.api.services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired(required = false)
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String senderEmail;

    // Send a professional notification Email to the platform admin.
    public void sendAdminNotification(String submissionName, String submissionPhone, String submissionType) {
        String subject = "New Request: " + submissionType;
        String content = "<h3>New Request Received</h3>" +
                "<p><strong>Name:</strong> " + submissionName + "</p>" +
                "<p><strong>Phone:</strong> " + submissionPhone + "</p>" +
                "<p><strong>Type:</strong> " + submissionType + "</p>" +
                "<p>Please check the admin dashboard for full details!</p>";

        sendHtmlEmail("admin@yaalmalegacy.com", subject, content);
    }

    // Send a stylized email confirmation to the student
    public void sendStudentConfirmation(String studentEmail, String studentName) {
        if (studentEmail == null || studentEmail.isEmpty()) return; // Fallback if no email provided

        String subject = "Ya Alma: Request Received Successfully";
        String content = "<h3>Hello " + studentName + ",</h3>" +
                "<p>Your application/inquiry has been successfully received by our system.</p>" +
                "<p>One of our academic consultants will be reaching out to you on WhatsApp very soon!</p>" +
                "<br/>" +
                "<p>Best regards,<br/><strong>The Ya Alma Team</strong></p>";

        sendHtmlEmail(studentEmail, subject, content);
    }

    private void sendHtmlEmail(String toEmail, String subject, String htmlBody) {
        if (mailSender == null) {
            System.err.println("Email sending skipped: JavaMailSender is not configured.");
            return;
        }
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            
            helper.setFrom(senderEmail);
            helper.setTo(toEmail);
            helper.setSubject(subject);
            helper.setText(htmlBody, true); // True indicates HTML
            
            mailSender.send(message);
        } catch (MessagingException e) {
            System.err.println("Failed to send email to: " + toEmail);
            e.printStackTrace();
        }
    }
}
