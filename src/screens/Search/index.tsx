import { Feather } from '@expo/vector-icons';
import { AreaInput, Container, Input } from './styles';

export function Search() {
  return (
    <Container>
      <AreaInput>
        <Feather name='search' color='#e52246' size={20} />
        <Input
          placeholder='Procurando alguém?'
        />
      </AreaInput>
    </Container>
  );
}