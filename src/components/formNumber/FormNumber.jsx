import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox/Checkbox";
import { GetNumber } from "../GetNumber/GetNumber";
import "../formNumber/formNumber.scss";

export default function FormNumber() {
  return (
    <form className="section-number__form" action="/" method="post">
      <GetNumber />
      <Checkbox />
      <Button>
        <a className="send-promo-link" href="#">
          Выслать промокод
        </a>
      </Button>
    </form>
  );
}
