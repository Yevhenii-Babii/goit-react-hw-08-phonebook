import css from '../Loader/Loader.module.css';
export const Loader = () => {
  return (
    <div className={css.lds__ring}>
      <div></div>
    </div>
  );
};
