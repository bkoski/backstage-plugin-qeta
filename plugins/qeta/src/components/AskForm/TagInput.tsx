import { Control, Controller } from 'react-hook-form';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import React, { useEffect, useMemo } from 'react';
import { qetaApiRef } from '../../api';
import { QuestionForm } from './types';
import { configApiRef, useApi } from '@backstage/core-plugin-api';

export const TagInput = (props: { control: Control<QuestionForm> }) => {
  const { control } = props;
  const qetaApi = useApi(qetaApiRef);
  const config = useApi(configApiRef);
  const allowCreation = useMemo(
    () => config.getOptionalBoolean('qeta.tags.allowCreation') ?? true,
    [config],
  );
  const allowedTags = useMemo(
    () => config.getOptionalStringArray('qeta.tags.allowedTags') ?? null,
    [config],
  );
  const maximumTags = useMemo(
    () => config.getOptionalNumber('qeta.tags.max') ?? 5,
    [config],
  );
  const [availableTags, setAvailableTags] = React.useState<string[] | null>([]);
  useEffect(() => {
    if (allowCreation) {
      qetaApi
        .getTags()
        .catch(_ => setAvailableTags(null))
        .then(data =>
          data
            ? setAvailableTags(data.map(tag => tag.tag))
            : setAvailableTags(null),
        );
    } else {
      setAvailableTags(allowedTags);
    }
  }, [qetaApi, allowCreation, allowedTags]);

  if (!allowCreation && (allowedTags === null || allowedTags.length === 0)) {
    return null;
  }

  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          multiple
          id="tags-select"
          className="qetaAskFormTags"
          value={value}
          options={availableTags ?? []}
          freeSolo={allowCreation}
          onChange={(_e, newValue) => {
            if (!value || value.length < maximumTags) {
              onChange(newValue);
            }
          }}
          renderInput={params => (
            <TextField
              {...params}
              variant="outlined"
              margin="normal"
              label="Tags"
              placeholder="Type or select tags"
              helperText={`Add up to ${maximumTags} tags to categorize your question`}
            />
          )}
        />
      )}
      name="tags"
    />
  );
};
