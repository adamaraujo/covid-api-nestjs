import Estado from './estado';
import Pais from './pais';
import Vacina from './vacina';

export default interface Indicator {
  pais: Pais & Vacina;
  estados: Estado[];
}
