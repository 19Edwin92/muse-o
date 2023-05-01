import * as FormBox from "../css/exhibitionCreateCss/EXFormBox";

export const EXFormBox = ({ Explan, WiteRule, children }) => {
  return (
    <FormBox.Box>
      <FormBox.Explanation>{Explan}</FormBox.Explanation>
      <FormBox.DetailExplanation>{children}</FormBox.DetailExplanation>
      {WiteRule && (
        <FormBox.WriteRule>
          <span>{WiteRule}</span>
        </FormBox.WriteRule>
      )}
    </FormBox.Box>
  );
};
