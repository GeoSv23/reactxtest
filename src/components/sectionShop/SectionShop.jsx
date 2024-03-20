import "../sectionShop/sectionShop.scss";

export default function SectionShop() {
  return (
    <section className="section tarif-desktop">
      <div className="tarif-desc">
        <h3 className="all-h3">Заходите на сайт Теле2</h3>
        <p className="p">
          Перейдите в&nbsp;магазин на&nbsp;страничку активации, введите ваш
          промокод. Готово! Теперь вы&nbsp;получите 1&nbsp;ТБ на&nbsp;ваш
          телефон при подключении тарифа &laquo;Мой онлайн+&raquo;.
        </p>

        <a
          className="all-buttons change-tarif"
          href="https://rostov.tele2.ru"
          target="_blank"
        >
          Офрмить тариф
        </a>
      </div>
      <div className="tarif-send">
        <img
          className="tarif-send__img"
          src="src\images\Mask Group.png"
          alt="картинка с изображением телефоном"
        />
      </div>
    </section>
  );
}
