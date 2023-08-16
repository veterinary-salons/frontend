import './StarsBox.scss';

const StarsBox = () => (
  <section className="rating">
    <div className="rating__group">
      <input className="rating__star" type="radio" name="general" value="1" />
      <input className="rating__star" type="radio" name="general" value="2" />
      <input className="rating__star" type="radio" name="general" value="3" />
      <input className="rating__star" type="radio" name="general" value="4" />
      <input className="rating__star" type="radio" name="general" value="5" />
    </div>
  </section>
);

export default StarsBox;
