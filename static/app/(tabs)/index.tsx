import { ScreenTemplate } from '../../components/Screen'
import SoftwareNameHeader from "../../components/Header/SoftwareNameHeader";
import Fotter from '../../components/Footer/Fotter';
import Introduction from '../../components/Introduction/Introduction';

export default function Index() {
  return (
    <ScreenTemplate >
      <SoftwareNameHeader />
      <Introduction/>
      <Fotter/>
    </ScreenTemplate>
  );
}
