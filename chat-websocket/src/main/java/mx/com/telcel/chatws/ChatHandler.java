package mx.com.telcel.chatws;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class ChatHandler extends TextWebSocketHandler {

    private static final Set<WebSocketSession> sessions = Collections.synchronizedSet(new HashSet<>());
    private final ObjectMapper mapper = new ObjectMapper();

    static class Message{ // Clase anidada estatica

        public String user;
        public String text;

        public Message(){ // Necesario para deserializar

        }

    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

        // Convertimos el mensaje recibido en formato JSON a objeto Java
        Message msg = mapper.readValue(message.getPayload(), Message.class);

        // Volvemos a convertir el objeto Java a JSON para reenviar a todos
        String json = mapper.writeValueAsString(msg);

        synchronized (sessions){
            for(WebSocketSession webSocketSession : sessions){
                if(webSocketSession.isOpen()){
                    webSocketSession.sendMessage(message);
                }
            }
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        sessions.remove(session);
    }
}
