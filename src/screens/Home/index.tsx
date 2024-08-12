
import { TouchableOpacity } from "react-native";
import { Container,EventName, EventDate, ViewForm, EventInput, ButtonText, ButtonTouch } from "./styles";
import { useState } from "react";

type Props = {
  eventname: string;
  eventdate: string;
  buttontext: string;

}

export default function Home({ eventname, eventdate, buttontext}: Props){
  /*Esse aqui estado da lista dos participantes*/
  const [participants, setParticipante] = useState<string[]>([]);

  /*Esse aqui estado dos participantes*/
  const [participantName, setParticipantName] = useState('');
  
  return(
    <Container>

      {/* Aqui onde aparece o nome do evento. */}
      <EventName>
        {eventname}
      </EventName>

      {/* Aqui onde aparece quando é o evento. */}
      <EventDate>
        {eventdate}
      </EventDate>

      {/* View Form */}
      <ViewForm>
        <EventInput
          placeholder='Nome do Participante'
          placeholderTextColor='#6B6B6B'
          onChangeText={setParticipantName}
          value={participantName}
        /> 

        <ButtonTouch
          onPress={() =>{}}
        >
          <ButtonText>
            {buttontext}
          </ButtonText>
        </ButtonTouch>
      </ViewForm>

    </Container>
  )
}