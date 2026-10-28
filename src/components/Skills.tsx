import type { SkillGroup } from "@/types";

type SkillsProps = {
  groups: readonly SkillGroup[];
};

export function Skills({ groups }: SkillsProps) {
  return (
    <dl className="border-t">
      {groups.map((group) => (
        <div
          key={group.label}
          className="grid gap-1 border-b py-3.5 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-6"
        >
          <dt className="eyebrow pt-0.5 text-xs">{group.label}</dt>
          <dd className="measure">{group.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  );
}
