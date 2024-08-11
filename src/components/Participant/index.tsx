import { TouchableOpacity } from "react-native";
import { Container, Name, ButtonText } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({name, onRemove }: Props){
  return (
    <Container>
      <Name>
        {name}
      </Name>

      <TouchableOpacity
        onPress={onRemove}
      >
        <ButtonText> - </ButtonText>
      </TouchableOpacity>
    </Container>
  );
}