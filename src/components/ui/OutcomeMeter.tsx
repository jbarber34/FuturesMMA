interface Props {
  fighterOutcomeTotal: number;
  fighterOutcomesPercentage: number;
  category: string;
}

export default function OutcomeMeter({
  fighterOutcomeTotal,
  fighterOutcomesPercentage,
  category,
}: Props) {
  return (
    <>
      <div>
        {category === 'KO' ? (
          <div className='pt-2 text-sm text-white'>
            KO <em className='p-2 text-mmaGold'>/</em> TKO
          </div>
        ) : (
          <div className='pt-2 text-sm text-white'>{category}</div>
        )}
        <div className='flex items-center'>
          <div className='w-1/2 bg-gray-800 h-3 rounded-full relative'>
            <div
              className='h-full bg-orange-500 rounded-full absolute left-0'
              style={{
                width: `${
                  fighterOutcomesPercentage === 100
                    ? fighterOutcomesPercentage
                    : fighterOutcomesPercentage + 5
                }%`,
              }}
            ></div>
            <div className='absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-xs'>
              {fighterOutcomeTotal}
            </div>
          </div>
          <div className='ml-2 text-white text-xs font-bold'>
            {fighterOutcomesPercentage.toFixed(0)}%
          </div>
        </div>
      </div>
    </>
  );
}
